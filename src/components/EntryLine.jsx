import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.entries";

const EntryLine = ({ entry }) => {
  const { id, description, value, isExpense } = entry;

  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(removeEntryRedux(id))
  };

  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => dispatch(openEditModal(id))} />
              <Icon
                name="trash"
                bordered
                onClick={() => handleDeleteClick(id)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
