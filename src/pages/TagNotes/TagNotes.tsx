import React from 'react'
import { useParams } from 'react-router-dom';
import { Container, EmptyMsgBox } from '../../styles/styles';
import { Note } from '../../types/note';
import { useAppSeletor } from '../../hooks/redux';
import MainWrapper from '../../comoponents/MainWrapper/MainWrapper';


const TagNotes = () => {
  const { name } = useParams() as { name: string }

  const { mainNotes } = useAppSeletor((state) => state.notesList);

  const notes: Note[] = [];
  mainNotes.forEach((note) => {
    if (note.tags.find(({ tag }) => tag === name)) {
      notes.push(note);
    }
  })

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) :
        (<MainWrapper notes={notes} type={name} />)}
    </Container>
  )
}

export default TagNotes