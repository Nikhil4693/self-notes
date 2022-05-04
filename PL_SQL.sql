--BLOCK DECLARATION
begin
DBMS_OUTPUT.PUT_LINE('ohho');
end;
/

--SELECT INTO CLAUSE
declare
naam VARCHAR2(20);
idd number(3);
begin
select empid,empname into idd,naam from employee where empid =12;
DBMS_OUTPUT.PUT_LINE(idd||'   '||naam);
end;
/

declare
highSal number(3);
begin
select max(empid) into highSal from employee;
DBMS_OUTPUT.PUT_LINE(highSal);
end;
/

--VARIABLE ATTRIBUTES
--COLUMN ATTRIBUTE table_name.col_name%type;

declare
name_col employee.empname%type;
begin
select empname into name_col from employee where empid=12;
DBMS_OUTPUT.PUT_LINE(name_col);
end;
/


--row attribute %rowtype;
declare
empRecord employee%rowtype;
begin
select empname, empid into empRecord.empname,empRecord.empid  from employee where empid=12;
DBMS_OUTPUT.PUT_LINE(empRecord.empid||'  '||empRecord.empname);
end;
/

--CONDITIONAL STATEMENTS
--if statement
BEGIN
if(2+2=4)then
DBMS_OUTPUT.PUT_LINE('yeah I got it');
end if;
END;
/

--if else statement
begin
if(2+2=6)then
DBMS_OUTPUT.PUT_LINE('yeah I got it');
else 
DBMS_OUTPUT.PUT_LINE('sorry');
end if;
end;
/

--else if
begin
if(2+2=6)then
DBMS_OUTPUT.PUT_LINE('yeah I got it');
ELSIF (2+266=7)then
DBMS_OUTPUT.PUT_LINE('sorry');
ELSIF (2+266=268) then
DBMS_OUTPUT.PUT_LINE('default');
end  if;
end;
/

--CONTROL STATEMENTS
--1. SIMPLE LOOP
--2.WHILE LOOP
--3.FOR LOOP

--1. SIMPLE LOOP
DECLARE 
A number(10):=1;
BEGIN 
LOOP
DBMS_OUTPUT.PUT_LINE(A);
EXIT WHEN A =5;
A:=A+1;
END LOOP;
END;
/

DECLARE
B NUMBER(1):=1;
BEGIN 
LOOP
DBMS_OUTPUT.PUT_LINE(B);
IF (B>=5) THEN
EXIT;
END IF;
B:=B+1;
END LOOP;
END;
/


--WHILE LOOP
DECLARE
C NUMBER(2):=1;
BEGIN
WHILE C<=5
LOOP 
DBMS_OUTPUT.PUT_LINE(C);
C:=C+1;
END LOOP;
END;
/

--FOR LOOP
BEGIN
FOR NUM IN 1 .. 10
LOOP
DBMS_OUTPUT.PUT_LINE(NUM);
END LOOP;
END;
/