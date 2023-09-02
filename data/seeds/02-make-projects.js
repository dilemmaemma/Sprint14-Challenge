const projects = [
    { 
        project_name: 'Starfall', 
        project_description: 'Take over all Team Star bases'
    },
    { 
        project_name: 'Desert Storm', 
        project_description: 'Prevent an all-out Iraqi invasion of Saudi Arabia', 
        project_completed: 1 
    },
    { 
        project_name: 'Design a Website', 
        project_description: 'Produce a website using .NET languages' 
    },
]

const resources = [
    { 
        resource_name: 'Pokemon Trainer' 
    },
    { 
        resource_name: 'Team of Pokemon', 
        resource_description: 'Should be a full team of Pokemon at least level 25-30' 
    },
    { 
        resource_name: 'US Military' 
    },
    { 
        resource_name: 'Military Equipment', 
        resource_description: 'Tanks, choppers, guns, ammo, etc.' 
    },
    { 
        resource_name: 'No Morals' 
    },
    { 
        resource_name: 'Web App Designers' 
    },
    { 
        resource_name: 'Graphic Designers' 
    },
    { 
        resource_name: 'Content Writers' 
    },
]

const tasks = [
    { 
        task_description: 'Become a Pokemon trainer', 
        task_completed: 1, 
        project_id: 1 
    },
    { 
        task_description: 'Build a whole Pokemon team', 
        task_notes: 'Make sure to include different types', 
        task_completed: 1, 
        project_id: 1 
    },
    { 
        task_description: 'Find Team Star bases', 
        project_id: 1 },
    { 
        task_description: 'Be President of the United States', 
        task_completed: 1, 
        project_id: 2 
    },
    { 
        task_description: 'Be racist and assume foreign nationals are out to get you', 
        task_notes: 'Not required, but helpful', 
        task_completed: 1, 
        project_id: 2 
    },
    { 
        task_description: 'Commit terroristic acts against the Iraqis and Saudis', 
        task_completed: 1, 
        project_id: 2 
    },
    { 
        task_description: 'Go home in victory', 
        task_completed: 1, 
        project_id: 2 
    },
    { 
        task_description: 'Frontend design', 
        task_notes: 'Create responsive web layouts', 
        task_completed: 1, 
        project_id: 3 
    },
    { 
        task_description: 'Backend coding', 
        task_notes: 'Implement RESTful APIs', 
        task_completed: 1, 
        project_id: 3 
    },
    { 
        task_description: 'SEO optimization', 
        task_notes: 'Improve website search rankings', 
        project_id: 3 
    },
]

const project_resources = [
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 1, project_id: 2 },
    { resource_id: 2, project_id: 2 },
    { resource_id: 3, project_id: 2 },
    { resource_id: 4, project_id: 2 },
    { resource_id: 5, project_id: 2 },
    { resource_id: 8, project_id: 2 },
    { resource_id: 6, project_id: 3 },
    { resource_id: 7, project_id: 3 },
    { resource_id: 8, project_id:  3}
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}