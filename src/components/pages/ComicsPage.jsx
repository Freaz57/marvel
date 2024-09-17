import { Route, Routes } from "react-router-dom";
import ComicsList from "../comicsList/ComicsList";
import SinglePageComic from "./SinglePageComics";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
  return (
    <>
      <AppBanner />
      <Routes>
        <Route path=":comicId" element={<SinglePageComic />} />
        <Route path="/" element={<ComicsList />} />
      </Routes>
    </>
  );
};

export default ComicsPage;
