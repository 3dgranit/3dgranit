import React from 'react';
import { Checkbox, Box } from '@material-ui/core'

const CheckBoxGroupConnected = ({ options, input}) => {

  return (
    <>
      {
        options.map((option, index) => {
          return (
            <div className="checkbox" key={index}>
              <Box component="label" display="flex">
                <Checkbox
                  color="secondary"
                  name={`${input.value}[${index}]`}
                  value={option.value}
                  checked={input.value.indexOf(option.value) !== -1}
                  onChange={(event) => {
                      const newValue = [...input.value];
                      if (event.target.checked) {
                          newValue.push(option.value);
                      } else {
                          newValue.splice(newValue.indexOf(option.value), 1);
                      }
                      return input.onChange(newValue);
                  }}/>  
                  <Box
                    component="img"
                    height={40}
                    width={40}
                    display="block"
                    src={option.icon}
                  />
                
              </Box>
            </div>
          )
        })
      }
    </>
  );
};

export default CheckBoxGroupConnected;
