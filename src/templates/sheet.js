import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Sheet from './../components/sheet';

export default ({ data }) => {
  const page = data.allIndexYaml.edges[0].node;
  return (
    <Layout>
      <Sheet page={page} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allIndexYaml(filter: { lang: { eq: $slug } }) {
      edges {
        node {
          global {
            title
            commands {
              helpForKeyword
              openFile
              saveAsFile
              closePane
              K
            }
          }
          words {
            keyword
            file
            movement
          }
          marks {
            title
            commands {
              list
              currentPositionA
              jumpPositionA
              yankToMarkA
              tip
            }
            tip
          }
          macros {
            title
            commands {
              recordA
              stopRecording
              runA
              rerun
            }
          }
          cursorMovement {
            title
            tip
            commands {
              h
              j
              k
              l
              w
              W
              e
              E
              b
              B
              zero
              caret
              dollar
              g_
              gg
              G
              fiveG
              fx
              tx
              closeCurlyBrace
              openCurlyBrace
              CtrlPlusb
              tip
              H
              M
              L
              operCurlyBrace
              centerCursor
              percent
              Fx
              Tx
              semicolon
              comma
              CtrlPluse
              CtrlPlusy
              zz
            }
          }
          insertMode {
            title
            commands {
              i
              I
              a
              A
              o
              O
              ea
              Esc
            }
          }
          editing {
            title
            commands {
              r
              J
              cc
              cw
              cDollar
              s
              S
              xp
              u
              CtrlPlusr
              dot
              gJ
              gwip
              ciw
              C
              U
            }
          }
          markingText {
            title
            commands {
              v
              V
              o
              CtrlPlusv
              O
              aw
              ab
              aB
              ib
              iB
              Esc
              AB
            }
          }
          visualCommands {
            title
            commands {
              greaterThan
              lessThan
              y
              d
              tilde
            }
          }
          cutAndPaste {
            title
            commands {
              yy
              twoyy
              yw
              yDollar
              p
              P
              dd
              twodd
              dw
              D
              dDollar
              x
              yiw
              yaw
              diw
              daw
            }
          }
          exiting {
            title
            commands {
              colonw
              colonwsudo
              colonwq
              colonx
              colonq
              colonqbang
              colonwqa
            }
          }
          searchAndReplace {
            title
            commands {
              forwardSlashPattern
              questionMarkPattern
              backslashVpattern
              n
              N
              colonPercentForwardSlashOldForwardSlashNewForwardSlashg
              colonPercentForwardSlashOldForwardSlashNewForwardSlashgc
              colonnoh
            }
          }
          searchMultipleFiles {
            title
            commands {
              colonvimgrep
              coloncn
              coloncp
              coloncopen
            }
          }
          workingWithMultipleFiles {
            title
            commands {
              colone
              colonbnext
              colonbprev
              colonls
              colonbd
              colonsp
              colonvsp
              ctrlPlusws
              ctrlPlusww
              ctrlPluswq
              ctrlPluswv
              ctrlPluswh
              ctrlPluswl
              ctrlPluswj
              ctrlPluswk
            }
          }
          tabs {
            title
            commands {
              colonTabNew
              ctrlPluswT
              gt
              gT
              hashgt
              colontabmove
              colontabc
              colontabo
              colontabdo
            }
          }
          registers {
            title
            commands {
              show
              pasteRegisterX
              yankIntoRegisterX
            }
            tip1
            tip2
          }
        }
      }
    }
  }
`;
