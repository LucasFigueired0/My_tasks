export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
      border: 1,
      
    }),
    control: (provided) => ({
      ...provided,
      width: 260,
      borderRadius: 10,
      background: 'linear-gradient(180deg, #33383D 0%, #1C1D20 100%)',
      
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition, color: '#fff' };
    },
    menu: (provided) => ({
      ...provided,
      maxHeight: 'none', // define a altura do menu como a mesma altura do select
    }),
  };