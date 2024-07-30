//import '../App.css'
import DataContextProvider from '../context/DataContext'
import TituloCalculadora  from '../components/TituloCalculadora'
import ListServices from '../components/ListServices'
import TotalPressupost from '../components/TotalPressupost'
import Menu from '../components/Menu'
import FormPressupost from '../components/FormPressupost'
import ListPressupostos from '../components/ListPressupostos'


import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

export default function App() {
  
  return (
      <DataContextProvider>
        <ChakraBaseProvider theme={theme}>
          <div>
            <Menu />
            <TituloCalculadora />
            <ListServices />
            <TotalPressupost/>
            <FormPressupost />
            <ListPressupostos />
            

          </div>
          </ChakraBaseProvider>
      </DataContextProvider>
  )
}

 
