const Employee = require('../employee.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

after(() => {
    mongoose.models = {};
});

describe('Employee', () => {
    it('should throw an error if no "firstName" arg', () => {
        const empl = new Employee({lastName: 'Doe', department: '3dfs3'}); 
      
        empl.validate(err => {
          expect(err.errors.firstName).to.exist;
        });
    });
    
    it('should throw an error if no "lastName" arg', () => {
        const empl = new Employee({firstName: 'John', department: '3dfs3'}); 
      
        empl.validate(err => {
          expect(err.errors.lastName).to.exist;
        });
    });

    it('should throw an error if no "department" arg', () => {
        const empl = new Employee({firstName: 'John', lastName: 'Doe'});
      
        empl.validate(err => {
          expect(err.errors.department).to.exist;
        });
    });

    it('should throw an error if "firstName" is not a string', () => {

        const cases = [{}, []];
        for(let firstName of cases) {
          const empl = new Employee({ firstName });
      
          empl.validate(err => {
            expect(err.errors.firstName).to.exist;
          });
      
        }
    });

    it('should throw an error if "lastName" is not a string', () => {

        const cases = [{}, []];
        for(let lastName of cases) {
          const empl = new Employee({ lastName });
      
          empl.validate(err => {
            expect(err.errors.lastName).to.exist;
          });
      
        }
    });

    it('should throw an error if "department" is not a string', () => {

        const cases = [{}, []];
        for(let department of cases) {
          const empl = new Employee({ department});
      
          empl.validate(err => {
            expect(err.errors.department).to.exist;
          });
      
        }
    });
});  