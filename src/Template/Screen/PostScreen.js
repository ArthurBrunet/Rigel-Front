import Apero from '../Component/apero'
import CustomPostCard from "../Component/CustomPostCard";
import Title from "../Component/Title";

export function PostScreen() {
    return (
        <>
            <Apero/>
            <Title title={'Posts'}/>
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
