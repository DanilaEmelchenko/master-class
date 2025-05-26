import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const seedProjects = async (numEntries) => {
  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)
    const projectData = {
      name: name,
      slug: name.toLocaleUpperCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: [1, 2, 3],
    }

    projects.push(projectData)
  }

  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
