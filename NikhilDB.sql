select * from Employee;
alter table Employee add AGE NUMBER(2);
DESC EMPLOYEE;

UPDATE EMpLOYEE SET AGE = 44 WHERE id = 56;

--employee table
create table Employee (id NUMBER(2) PRIMARY key,
firstname VARCHAR2(20),
lastname VARCHAR2(20),
age NUMBER(20));