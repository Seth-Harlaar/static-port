import React, {useState} from 'react'


import { 
  ContentWrapper,
  ThemeMenu,
  ThemeItem,
  ThemeButton,
  ThemeText,
  ThemeTitle,
} from './ThemePickerElements.js'


let initialThemes = [
  true, false, false
]

const ThemeSelection = ({thmFcn}) => {
  const [themes, setThemes] = useState(initialThemes);

  function updateThemes(selection){
    const nextThemes = themes.map((c,i) => {
      if(selection === i){
        return true;
      } else {
        return false;
      }
    });
    setThemes(nextThemes);
    thmFcn(selection);
  }

  return (
    <>
      <ContentWrapper>
        
        <ThemeTitle>
          Select a theme:
        </ThemeTitle>

        <ThemeMenu>
          <ThemeItem sel={themes[0]} onClick={() => updateThemes(0)} >
            <ThemeButton sel={themes[0]}/>
            <ThemeText>The Original</ThemeText>
          </ThemeItem>

          <ThemeItem sel={themes[1]} onClick={() => updateThemes(1)} >
            <ThemeButton sel={themes[1]}/>
            <ThemeText>Another</ThemeText>
          </ThemeItem>

          <ThemeItem sel={themes[2]} onClick={() => updateThemes(2)} >
            <ThemeButton sel={themes[2]}/>
            <ThemeText>Cold</ThemeText>
          </ThemeItem>

        </ThemeMenu>
      </ContentWrapper>
    </>
  )
}

export default ThemeSelection
