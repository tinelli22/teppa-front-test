import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPlayer } from "../../interfaces/player";
import { deleteService, getAllService } from "../../services/player";
import S from "./styles";

const Players = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const navigate = useNavigate();
  
  const getAll = useCallback(async () => {
    const resp = await getAllService();
    if (!resp) return;
    setPlayers(resp);
  }, []);

  const onDelete = useCallback(async (id: string) => {
    const resp = await deleteService(id)
    if(resp) getAll()
  }, [players])

  const onEdit = useCallback(async (data: IPlayer) => {
    navigate(`/${data.id!}`, {
      state: data
    })
  }, [players])
  

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <S.Header>
        <S.Title>Lista de Jogadores</S.Title>
        <S.Button
          onClick={() => {
           window.location.href = '/novo'
          }}
        >
          Novo
        </S.Button>
      </S.Header>
      <S.Wrapper>
        <S.Row className="list">
          {players.map((p, index) => (
            <S.PlayerItem key={index}>
              <img id="image" src={p.image}  />
              <span id="name">{p.name}</span>
              <span id="status">{p.isInjured ? "Lesionado" : "OK"}</span>
              <S.Row className="player-item-actions">
                <span id="option" onClick={() => onEdit(p)}>Editar</span>
                <span id="option" onClick={() => onDelete(p.id!)}>Remover</span>
              </S.Row>
            </S.PlayerItem>
          ))}
        </S.Row>
      </S.Wrapper>
    </>
  );
};

export default Players;
