import { TextLimitPipe } from './text-limit.pipe';

describe('TextLimitPipe', () => {
  it('Should limit the string text', () => {
    const pipe = new TextLimitPipe();
    expect(pipe.transform('testpipe',3)).toEqual('tes');
  });
});
