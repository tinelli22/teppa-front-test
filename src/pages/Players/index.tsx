import React, { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { IPlayer } from "../../interfaces/player";
import { getAllService } from "../../services/player";
import S from "./styles";

const Players = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const getAll = useCallback(async () => {
    const resp = await getAllService();
    if (!resp) return;
    setPlayers(resp);
  }, []);

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
                <span>Editar</span>
                <span>Remover</span>
              </S.Row>
            </S.PlayerItem>
          ))}
        </S.Row>
      </S.Wrapper>
    </>
  );
};

export default Players;
