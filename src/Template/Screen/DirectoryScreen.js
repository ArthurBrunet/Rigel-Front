import Apero from '../Component/apero';
import CustomCard from '../Component/CustomCard';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export function DirectoryScreen() {
    return (
        <>
        <div className={'filterList'}>
        <Autocomplete
        className={'list'}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Entreprises"/>
        )}
        />

        <Autocomplete
        className={'list'}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Type d'entreprise" />
        )}
        />

        <Autocomplete
        className={'list'}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Compétences"/>
        )}
        />
        </div>

        <div class="cards">
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
          <CustomCard/>
        </div>
        <Apero/>
        </>
    );
}

const Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
]
