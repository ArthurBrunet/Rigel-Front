import Apero from '../Component/apero'
import CustomPostCard from "../Component/CustomPostCard";
import Title from "../Component/Title";

export function HomeScreen() {
    return (
        <>
            <Apero/>
            <Title title={'Accueil'}/>
            <div className="cards">
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
                <CustomPostCard/>
            </div>
        </>
        );
}
