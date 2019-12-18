import { PATTERN } from '../const/patterns';

const checkEmail = value => PATTERN.EMAIL.test(value);

export { checkEmail };
