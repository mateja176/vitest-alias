import { describe, expect, test } from 'vitest';
import { result } from './main';

describe('main', () => {
  test('result', () => {
    expect(result).toBe(0);
  });
});
