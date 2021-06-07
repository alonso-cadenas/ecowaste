import { sanitizeInput } from './sanitizeInput';

describe('sanitizeInput', () => {
    it('should handle null', () => {
        const value = sanitizeInput(null);
        expect(value).toEqual('');
    });

    it('should not remove words', () => {
        const value = sanitizeInput('test');
        expect(value).toEqual('test');
    });

    it('should not remove digits', () => {
        const value = sanitizeInput('123');
        expect(value).toEqual('123');
    });

    it('should not remove whitespace', () => {
        const value = sanitizeInput('test 123');
        expect(value).toEqual('test 123');
    });

    it('should remove special characters', () => {
        const value = sanitizeInput('<script>');
        expect(value).toEqual('script');
    });
});
