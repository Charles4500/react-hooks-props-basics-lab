import user from "../data/user";
function Links(){
  return <>
  <h3>Links</h3>
  <a href="">{user.links.github}</a>
  <a href="">{user.links.linkedin}</a>
  </>
}
export default Links;