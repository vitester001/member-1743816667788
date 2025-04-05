import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
    it('should return default greeting with name when no greeting provided', () => {
        expect(greet('John')).toBe('Hello, John!');
    });

    it('should return custom greeting with name when greeting provided', () => {
        expect(greet('John', 'Hi')).toBe('Hi, John!');
    });

    it('should work with empty string name', () => {
        expect(greet('')).toBe('Hello, !');
    });

    it('should handle special characters in name', () => {
        expect(greet('John@#$')).toBe('Hello, John@#$!');
    });

    it('should handle special characters in greeting', () => {
        expect(greet('John', 'Hello@#$')).toBe('Hello@#$, John!');
    });

    it('should handle whitespace in name', () => {
        expect(greet('   John   ')).toBe('Hello,    John   !');
    });

    it('should handle whitespace in greeting', () => {
        expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
    });

    it('should treat empty string greeting as undefined', () => {
        expect(greet('John', '')).toBe('Hello, John!');
    });
});
