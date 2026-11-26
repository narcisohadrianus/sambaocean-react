<?php
// Recebe o pedido de proposta do site e envia-o para geral@sambaocean.com
// (funciona no alojamento Hostinger, que tem a função mail() do PHP activa).
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

// Armadilha anti-spam: pessoas não preenchem este campo
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function campo($data, $k, $max = 200) {
    $v = isset($data[$k]) ? trim((string) $data[$k]) : '';
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
}

$nome     = campo($data, 'nome');
$empresa  = campo($data, 'empresa');
$telefone = campo($data, 'telefone', 60);
$email    = campo($data, 'email', 150);
$servico  = campo($data, 'servico');
$origem   = campo($data, 'origem');
$destino  = campo($data, 'destino');
$mensagem = campo($data, 'mensagem', 5000);

if ($nome === '' || $mensagem === '' || ($telefone === '' && $email === '')) {
    http_response_code(422);
    echo json_encode(['ok' => false]);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $email = '';
}

$para    = 'geral@sambaocean.com';
$assunto = 'Pedido de proposta — ' . str_replace("\n", ' ', $servico) . ($empresa !== '' ? ' · ' . str_replace("\n", ' ', $empresa) : '');

$linhas = [
    'Pedido de proposta recebido pelo site www.sambaocean.com',
    '',
    'Nome: ' . $nome,
    $empresa  !== '' ? 'Empresa: ' . $empresa : null,
    $telefone !== '' ? 'Telefone: ' . $telefone : null,
    $email    !== '' ? 'E-mail: ' . $email : null,
    'Serviço: ' . $servico,
    $origem   !== '' ? 'Província de origem: ' . $origem : null,
    $destino  !== '' ? 'Província de destino: ' . $destino : null,
    '',
    'Mensagem:',
    $mensagem,
];
$corpo = implode("\n", array_filter($linhas, function ($l) { return $l !== null; }));

$headers = [
    'From: Site SAMBA OCEAN <geral@sambaocean.com>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}

$ok = mail($para, '=?UTF-8?B?' . base64_encode($assunto) . '?=', $corpo, implode("\r\n", $headers), '-f geral@sambaocean.com');

if (!$ok) {
    http_response_code(500);
}
echo json_encode(['ok' => (bool) $ok]);
