const ENDPOINT_URL = "https://fun-moose-91.hasura.app/v1/graphql";
const Lukulab_Exercise_QUERY = `
    query {
         Lukulab_Exercise {
            Complexity_Level
		Exercise_No
		ID
		Activeelements
		Audio
		AverageResult
		Correctanswer
		Exercise_Set
		Instructions
		Name
		Picture
		Skill_tag
		Text
		Timer
		Type
        }
    }
`;
export const fetchLukulab_Exercise = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: Lukulab_Exercise_QUERY
        })
    });
    return await response.json();
};


