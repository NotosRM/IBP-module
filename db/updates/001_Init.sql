if not exists (select *
from sys.schemas
where name = N'formatValue')
	exec('create schema [formatValue]')
go

if object_id('[formatValue].[Warehouse]') is null
begin
	CREATE TABLE [formatValue].[Warehouse]
	(
		[ID] int NOT NULL IDENTITY,
		[Name] varchar(1000) NOT NULL,
		[Count] int NOT NULL,
		[Cost] int NOT NULL,
		CONSTRAINT [PK_test_Warehouse] PRIMARY KEY ([ID])
	)
end
else
begin
	delete from [formatValue].[Warehouse]
END


