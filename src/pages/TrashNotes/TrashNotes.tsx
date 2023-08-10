import React from 'react'
import MainWrapper from '../../comoponents/MainWrapper/MainWrapper';
import { Container, EmptyMsgBox } from '../../styles/styles';
import { useAppSeletor } from '../../hooks/redux';

const TrashNotes = () => {
  const { trashNotes } = useAppSeletor((state) => state.notesList);

  return (
    <Container>
      {trashNotes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) :
        (
          <MainWrapper notes={trashNotes} type="trash" />
        )
      }
    </Container>
  )
}

export default TrashNotes