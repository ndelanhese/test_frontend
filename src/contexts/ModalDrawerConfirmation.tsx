import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

// Crio a interface para tipar os dados do children utilizando qualquer dado react como parametro
interface ModalProviderProps {
  children: ReactNode;
}

// Aqui eu indico para o typescript que o meu contexto vem do UseDisclosureReturn de dentro do chrakra
type ModalContextData = UseDisclosureReturn;

// Aqui eu crio o meu contexto utilizando o react NEXT e tipo ele
const ModalDrawerContext = createContext({} as ModalContextData);

// esporto a function recebendo os parametros de children
export function ModalProvider({
  children,
}: ModalProviderProps) {
  //O metodo useDisclosure é um metodo com logica pronta do Chrakra para abrir e fechar a Menu
  const disClosure = useDisclosure();

  //Importo as rotas de dentro do nextjs
  const router = useRouter();

  // faço um useEffect do react, disparando uma função cada vez que o caminho da URL mudar chamando o metodo onCLose do Chrakra
  useEffect(() => {
    disClosure.onClose();
  }, [router.asPath]);

  return (
    //Retorno a minha context do Menu passando todos os metodos do chrakra no value
    <ModalDrawerContext.Provider value={disClosure}>
      {children}
    </ModalDrawerContext.Provider>
  );
}

//Aqui eu crio o meu proprio hook pra não precisar ficar usando o do react
export const useModalDrawer = () => useContext(ModalDrawerContext);
