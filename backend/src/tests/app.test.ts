import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('deve retornar a mensagem de boas-vindas', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Bem-vindo ao Taskify Backend!');
    expect(response.status).toBe(200);
  });
});

function expect(actual: any) {
  return {
    toEqual(expected: any) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`);
      }
    },
    toBe(expected: any) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to be ${expected}`);
      }
    }
  };
}
