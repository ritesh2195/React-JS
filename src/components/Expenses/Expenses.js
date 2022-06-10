import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filteredYear,setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=>{

    setFilteredYear(selectedYear)

  }

  const filteredExpense = props.items.filter(expense=>{

    return expense.date.getFullYear().toString()===filteredYear;

  })


  return (
    <div>
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}>
        </ExpenseFilter>
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpensesList items={filteredExpense}></ExpensesList>
    </Card>
    </div>
  );
}

export default Expenses;