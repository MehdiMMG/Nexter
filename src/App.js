import "../src/styles/main.scss"
import {Features,StoryPictures,StoryContent,Homes, Gallery, Footer, Sidebar, Header, Realtors} from "../src/components/index"

function App() {
  return (
    <body className="container">
      <Sidebar></Sidebar>

      <Header></Header>

      <Realtors></Realtors>

      <Features></Features>
  
      <StoryPictures></StoryPictures>

      <StoryContent></StoryContent>

      <Homes></Homes>

      <Gallery></Gallery>

      <Footer></Footer>
    </body>
  );
}

export default App;
