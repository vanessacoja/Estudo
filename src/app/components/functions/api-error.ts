export default function ApiError(error: unknown): { //pertite importar essa função direito com import apierror from
    data: null;
    ok: false;
    error: string;
    //a funcao apirro recebe um ero e trasforma isso em um objeto padronizxação que tem sempre essa estrutura
  } {
    if (error instanceof Error) {
      return { data: null, ok: false, error: error.message };
    } else {
      return { data: null, ok: false, error: 'Erro genérico' };
    }
  }
  //export default: permite importar essa função direto com import apiError from ...

  //error: unknown: o parâmetro pode ser qualquer tipo de erro

 //: { data: null; ok: false; error: string; }: define o tipo de retorno da função