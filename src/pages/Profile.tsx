import { LoggedInProfileBox } from "../components/LoggedInProfile";
import { NotLoggedInProfileBox } from "../components/NotLoggedInProfile";

export function Profile() {
	return <>
		<h1>Profile</h1>

		<LoggedInProfileBox/>
		<NotLoggedInProfileBox/>
		
	</>
}