import Apero from '../Component/apero';
import CustomCard from '../Component/CustomCard';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Title from "../Component/Title";
import {useEffect, useState} from "react";
import {getAllCompany, getAllCompanyByType, getAllType} from "../../Service/DirectoryService";

export function DirectoryScreen() {

    let [postType, setPostType] = useState([]);
    let [companyList, setCompanyList] = useState([]);
    let [loading, setLoading] = useState(false);


    useEffect(async () => {
        try {
            let allType = await getAllType();
            let tempArray = [];
            allType.forEach(element => tempArray.push({"title": element.name}));
            setPostType(tempArray);
            let allCompany = await getAllCompany();
            setCompanyList(allCompany);
            setLoading(true);
        } catch (e) {
            console.error(e);
        }
    }, []);


    const handleChange = async (companyType) => {
        if (companyType !== '') {
            try {
                let allCompanyByType = await getAllCompanyByType(companyType);
                console.log(allCompanyByType);
                setCompanyList(allCompanyByType[0].companies);
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                let allType = await getAllType();
                let tempArray = [];
                allType.forEach(element => tempArray.push({"title": element.name}));
                setPostType(tempArray);
                let allCompany = await getAllCompany();
                setCompanyList(allCompany);
            } catch (e) {
                console.error(e);
            }
        }
    }

    return (
        <>
            <Title title={'Annuaire'}/>
            {loading && (
                <>
                    <div className={'filterList'}>
                        <Autocomplete
                            className={'list'}
                            limitTags={2}
                            id="multiple-limit-tags"
                            options={postType || {}}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params} label="Compétences"/>
                            )}
                            onChange={(result) => {
                                handleChange(result.target.textContent);
                            }}
                        />
                    </div>
                    <div className="cards">
                        {companyList.map((item, index) => (
                            <CustomCard item={item}/>
                        ))}
                    </div>
                </>
            )}
            <Apero/>
        </>
    );
}
