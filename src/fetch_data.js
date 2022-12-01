const ENDPOINT_URL = "https://fun-moose-91.hasura.app/v1/graphql";
const Lukulab_Exercise_QUERY = `
    query {
         Lukulab_exercise {
            id
            name
            type
            skill_tag
            Complexity_level
            picture
            text
            active elements
            instructions
            correct answer
            average result
            audio
            exercise_set
            exercise_no
        }
    }
`;
export const fetchLukulab_exercise = async () => {
    const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify({
            query: Lukulab_Exercise_QUERY
        })
    });
    return await response.json();
};
Footer

