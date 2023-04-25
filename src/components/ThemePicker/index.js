import React, {useState, useEffect} from 'react'


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
          <ThemeItem>
            <ThemeButton onClick={() => updateThemes(0)} sel={themes[0]}/>
            <ThemeText>asdf</ThemeText>
          </ThemeItem>

          <ThemeItem>
            <ThemeButton onClick={() => updateThemes(1)} sel={themes[1]}/>
            <ThemeText>asdf</ThemeText>
          </ThemeItem>

          <ThemeItem>
            <ThemeButton onClick={() => updateThemes(2)} sel={themes[2]}/>
            <ThemeText>asdf</ThemeText>
          </ThemeItem>

        </ThemeMenu>
      </ContentWrapper>
    </>
  )
}

export default ThemeSelection
