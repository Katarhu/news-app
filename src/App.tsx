import {Outlet} from "react-router-dom";
import useOnMount from "./hooks/useOnMount";
import {useAppDispatch} from "./hooks/redux";
import {getArticles} from "./store/articles/articles.action.creators";

function App() {

  const dispatch = useAppDispatch();

  useOnMount(() => {
    dispatch(getArticles(0));
  });

  return <Outlet />;
}

export default App
