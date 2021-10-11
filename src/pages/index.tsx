import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data display/Page Title/PageTitle';
import UserInformation from 'ui/components/data display/userinformation/userinformation';
import TextField from 'ui/components/inputs/TextField/TextField';
  

const Home: NextPage = () => {
  return(
  <div>
    <SafeEnvironment />
    <PageTitle
     title={'Conheça os Profissionais'} 
     subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
    />

<TextField 
mask={'99.999-999'}
 label={'Digite seu CEP'} 
 fullWidth 
 variant={'outlined'}
 />

    <UserInformation
    name={'Jozi Borges'}
    picture={'http://github.com/joziborges.png'}
    rating={3}
    description={'Porto Alegre'}
    />
     </div>)
}
export default Home
