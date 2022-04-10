import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

import {
  changeSpeciesField,
  changeAgeField,
  changeGenderField,
  changeChildField,
  changeOthersField,
  changeGardenField,
  changeLocField,
  changeStatusField,
  fetchDepartments,
  fetchSpecies,
  formSubmit,
} from '../../actions/formActions';

export default function SearchForm() {
  const speciesValue = useSelector((state) => state.SearchedAnimals.species);
  const genderValue = useSelector((state) => state.SearchedAnimals.gender);
  const ageValue = useSelector((state) => state.SearchedAnimals.age);
  const childValue = useSelector((state) => state.SearchedAnimals.childCompatibility);
  const othersValue = useSelector((state) => state.SearchedAnimals.otherAnimalCompatibility);
  const gardenValue = useSelector((state) => state.SearchedAnimals.gardenNeeded);
  const locValue = useSelector((state) => state.SearchedAnimals.department);
  const statusValue = useSelector((state) => state.SearchedAnimals.status);
  const departments = useSelector((state) => state.FormReducer.departments);
  const species = useSelector((state) => state.FormReducer.species);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpecies());
    dispatch(fetchDepartments());
  }, []);

  const handleChangeSpecies = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeSpeciesField(name, inputValue);
    dispatch(action);
  };
  const handleChangeGender = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeGenderField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeAge = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeAgeField(name, inputValue);
    dispatch(action);
  };
  const handleChangeChild = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeChildField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeOthers = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeOthersField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeGarden = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeGardenField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeLoc = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeLocField(name, parseInt(inputValue, 10));
    dispatch(action);
  };
  const handleChangeStatus = (event) => {
    const { value: inputValue, name } = event.target;
    const action = changeStatusField(name, inputValue);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      speciesValue,
      genderValue,
      ageValue,
      childValue,
      othersValue,
      gardenValue,
      locValue,
    });
    dispatch(formSubmit());
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Accordion>
          <Button variant="contained" fullWidth sx={{ px: 0, py: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ width: 1 }}
            >
              <Typography>Rechercher un animal</Typography>
            </AccordionSummary>
          </Button>
          <AccordionDetails>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Espèce</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={speciesValue}
                  label="Espèces"
                  onChange={handleChangeSpecies}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={999}>
                    <em>Choisissez une espèce</em>
                  </MenuItem>
                  {species.map((item) => (
                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Genre</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={genderValue}
                  onChange={handleChangeGender}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Femelle" />
                  <FormControlLabel value={1} control={<Radio />} label="Mâle" />
                  <FormControlLabel value={2} control={<Radio />} label="Indifférent" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Âge</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="age"
                  value={ageValue}
                  label="Age"
                  onChange={handleChangeAge}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={0}>moins de 1 an</MenuItem>
                  <MenuItem value={1}>1 à 5 ans</MenuItem>
                  <MenuItem value={2}>5 à 10 ans</MenuItem>
                  <MenuItem value={3}>plus de 10 ans</MenuItem>
                  <MenuItem value={4}>Indifférent</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Sociabilité avec les enfants</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="childrenCompatibility"
                  value={childValue}
                  onChange={handleChangeChild}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Sociabilité avec les autres animaux</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="otherAnimalCompatibility"
                  value={othersValue}
                  onChange={handleChangeOthers}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Accès à un jardin</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gardenNeeded"
                  value={gardenValue}
                  onChange={handleChangeGarden}
                >
                  <FormControlLabel value={0} control={<Radio />} label="Oui" />
                  <FormControlLabel value={1} control={<Radio />} label="Non" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ mt: 1 }}>Département</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="department"
                  value={locValue}
                  label="species"
                  onChange={handleChangeLoc}
                  sx={{ mt: 2 }}
                >
                  <MenuItem value={999}>
                    <em>Choisissez une département</em>
                  </MenuItem>
                  {departments.map((item) => (
                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={(
                  <Checkbox />

                )}
                label="Inclure les animaux en cours de réservation"
                value={statusValue}
                onChange={handleChangeStatus}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Lancer la recherche
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
