import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const projectTableRows = (projects, lockProject) => projects.map(project => (
  <TableRow key={project.name}>
    <TableCell>{project.name}</TableCell>
    <TableCell>
      {project.locked_by
        ? `${project.locked_by.first_name} ${project.locked_by.last_name}`
        : ''}
    </TableCell>
    <TableCell><Button variant="outlined" color="secondary" onClick={() => lockProject(project)}>Lock</Button></TableCell>
  </TableRow>
));

const ProjectTable = ({ projects, lockProject }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Project</TableCell>
          <TableCell>Locked by</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {projectTableRows(projects, lockProject)}
      </TableBody>

    </Table>
  </Paper>
);

export default ProjectTable;
