import { checkEmail } from '../validate';

describe('validate', () => {
  it('checkEmail a valid email', () => {
    const email = 'carambolas@mail.com';

    expect(checkEmail(email)).toBeTruthy();
  });

  it('checkEmail a valid email with numbers', () => {
    const email = '123@mail.com';

    expect(checkEmail(email)).toBeTruthy();
  });

  it('checkEmail a valid email with special chars', () => {
    const email = 'carambolas-quadradas@mail.com';

    expect(checkEmail(email)).toBeTruthy();
  });

  it('checkEmail a valid email with .com.br', () => {
    const email = 'carambolas@mail.com.br';

    expect(checkEmail(email)).toBeTruthy();
  });

  it('checkEmail a invalid email with @ 2x', () => {
    const email = 'carambolas@quadradas@mail.com';

    expect(checkEmail(email)).toBeFalsy();
  });

  it('checkEmail a invalid email withot @', () => {
    const email = 'carambolas.mail.com';

    expect(checkEmail(email)).toBeFalsy();
  });

  it('checkEmail a invalid email without .com', () => {
    const email = 'carambolas@';

    expect(checkEmail(email)).toBeFalsy();
  });
});
