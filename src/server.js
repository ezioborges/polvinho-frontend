import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const port = Number.parseInt(process.env.PORT ?? '5173', 10);

const contentTypes = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.ico': 'image/x-icon',
	'.jpeg': 'image/jpeg',
	'.jpg': 'image/jpeg',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
};

const sendFile = (filePath, response, method) => {
	response.writeHead(200, {
		'Content-Type':
			contentTypes[extname(filePath).toLowerCase()] ??
			'application/octet-stream',
	});

	if (method === 'HEAD') {
		response.end();
		return;
	}

	createReadStream(filePath)
		.on('error', error => {
			console.error('Erro ao ler arquivo:', error);
			if (!response.headersSent) {
				response.writeHead(500);
			}
			response.end('Erro interno do servidor');
		})
		.pipe(response);
};

const server = createServer(async (request, response) => {
	if (!['GET', 'HEAD'].includes(request.method)) {
		response.writeHead(405, { Allow: 'GET, HEAD' });
		response.end('Método não permitido');
		return;
	}

	let pathname;
	try {
		pathname = decodeURIComponent(
			new URL(request.url, 'http://localhost').pathname,
		);
	} catch {
		response.writeHead(400);
		response.end('Requisição inválida');
		return;
	}

	const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
	const requestedPath = resolve(projectRoot, relativePath);

	if (
		requestedPath !== projectRoot &&
		!requestedPath.startsWith(`${projectRoot}${sep}`)
	) {
		response.writeHead(403);
		response.end('Acesso negado');
		return;
	}

	try {
		const fileStats = await stat(requestedPath);
		if (fileStats.isFile()) {
			sendFile(requestedPath, response, request.method);
			return;
		}
	} catch (error) {
		if (error.code !== 'ENOENT') {
			console.error('Erro ao localizar arquivo:', error);
			response.writeHead(500);
			response.end('Erro interno do servidor');
			return;
		}
	}

	if (request.headers.accept?.includes('text/html')) {
		sendFile(resolve(projectRoot, 'index.html'), response, request.method);
		return;
	}

	response.writeHead(404);
	response.end('Arquivo não encontrado');
});

server.listen(port, '0.0.0.0', () => {
	console.log(`Frontend rodando em http://localhost:${port}`);
});
