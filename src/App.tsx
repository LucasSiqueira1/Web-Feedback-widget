import React from 'react';
import { WidgetButton } from './components/WidgetButton/WidgetButton';
import { WidgetForm } from './components/WidgetForm/WidgetForm';
import './global.css';


export const App = () => {
  return (
    <>
      <WidgetForm/>
      <WidgetButton/>
    </>
  );
}

