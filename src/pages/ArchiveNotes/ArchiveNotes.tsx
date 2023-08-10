import React from 'react'
import { Container, EmptyMsgBox } from '../../styles/styles';
import { useAppSeletor } from '../../hooks/redux';
import MainWrapper from '../../comoponents/MainWrapper/MainWrapper';

const ArchiveNotes = () => {

  const { archiveNotes } = useAppSeletor((state) => state.notesList);

  return (
    <Container>
      {archiveNotes.length === 0 ?
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
        :
        <MainWrapper notes={archiveNotes} type="archive" />
      }
    </Container>
  )
}

export default ArchiveNotes