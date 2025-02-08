import { validatePassword } from "./validate-password";

describe('validatePassword', () => {
  
  it('should return true for a valid password', () => {
    const validPassword = 'MyPPassword123';
    const res = validPassword(validPassword);
    expect(res).toBe(true);
  });
  it('should validate a password against 8 minimum characters and return error message', () => {
    
  })
  it('should validate a password against mixed case', () => {
    
  })
  it('should validate a password against digits and characters', () => {
    
  })
  it('should validate a password against special character', () => {

   })
 })