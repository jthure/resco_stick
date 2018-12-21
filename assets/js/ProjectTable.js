import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

const lockButton = (lockProject, project) => (
  <Button
    style={{ width: '120px' }}
    variant="outlined"
    color="secondary"
    onClick={() => lockProject(project)}
  >
    Lock
  </Button>)
const releaseButton = (releaseProject, project, loggedInUser) => (
  <Button
    style={{ width: '120px' }}
    variant="outlined"
    color="primary"
    disabled={project.locked_by && loggedInUser && project.locked_by.email !== loggedInUser.email}
    onClick={() => releaseProject(project)}
  >
    Release
  </Button>)


const projectTableRows = (projects, lockProject, releaseProject, loggedInUser) => projects.map(project => (
  <TableRow
    key={project.name}
    style={{
      border: project.locked_by ? '2px solid red' : undefined,
      backgroundColor: project.locked_by && loggedInUser && project.locked_by.email !== loggedInUser.email ? '#ffdbdb' : undefined,
    }}
  >
    <TableCell>{project.name}</TableCell>
    <TableCell>
      {project.locked_by
        ? `${project.locked_by.first_name} ${project.locked_by.last_name}`
        : ''}
    </TableCell>
    <TableCell style={{ textAlign: 'right' }}>
      {project.locked_by
        ? releaseButton(releaseProject, project, loggedInUser)
        : lockButton(lockProject, project)}
    </TableCell>
  </TableRow>
))

const ProjectTable = ({
 projects, lockProject, releaseProject, loggedInUser 
}) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow style={{ backgroundColor: '#f7f7f7' }}>
          <TableCell style={{ fontSize: '0.9rem' }}>Project</TableCell>
          <TableCell style={{ fontSize: '0.9rem' }}>Locked by</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {projectTableRows(projects, lockProject, releaseProject, loggedInUser)}
      </TableBody>

    </Table>
  </Paper>
)

export default ProjectTable
