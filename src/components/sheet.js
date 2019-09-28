import React from 'react';

export default ({ page }) => (
  <div className="container">
    <div className="commands-container">
      <div className="grid-block">
        <div className="grid-lg-1-3">
          <h2>{page.global.title}</h2>
          <ul>
            <li>
              <kbd>:help {page.words.keyword}</kbd> - {page.global.commands.helpForKeyword}
            </li>
            <li>
              <kbd>:saveas {page.words.file}</kbd> - {page.global.commands.saveAsFile}
            </li>
            <li>
              <kbd>:close</kbd> - {page.global.commands.closePane}
            </li>
            <li>
              <kbd>K</kbd> - {page.global.commands.K}
            </li>
          </ul>
          <h2>{page.cursorMovement.title}</h2>
          <ul>
            <li>
              <kbd>h</kbd> - {page.cursorMovement.commands.h}
            </li>
            <li>
              <kbd>j</kbd> - {page.cursorMovement.commands.j}
            </li>
            <li>
              <kbd>k</kbd> - {page.cursorMovement.commands.k}
            </li>
            <li>
              <kbd>l</kbd> - {page.cursorMovement.commands.l}
            </li>
            <li>
              <kbd>H</kbd> - {page.cursorMovement.commands.H}
            </li>
            <li>
              <kbd>M</kbd> - {page.cursorMovement.commands.M}
            </li>
            <li>
              <kbd>L</kbd> - {page.cursorMovement.commands.L}
            </li>
            <li>
              <kbd>w</kbd> - {page.cursorMovement.commands.w}
            </li>
            <li>
              <kbd>W</kbd> - {page.cursorMovement.commands.W}
            </li>
            <li>
              <kbd>e</kbd> - {page.cursorMovement.commands.e}
            </li>
            <li>
              <kbd>E</kbd> - {page.cursorMovement.commands.E}
            </li>
            <li>
              <kbd>b</kbd> - {page.cursorMovement.commands.b}
            </li>
            <li>
              <kbd>B</kbd> - {page.cursorMovement.commands.B}
            </li>
            <li>
              <kbd>%</kbd> - <SetHtml>{page.cursorMovement.commands.percent}</SetHtml>
            </li>
            <li>
              <kbd>0</kbd> - {page.cursorMovement.commands.zero}
            </li>
            <li>
              <kbd>^</kbd> - {page.cursorMovement.commands.caret}
            </li>
            <li>
              <kbd>$</kbd> - {page.cursorMovement.commands.dollar}
            </li>
            <li>
              <kbd>g_</kbd> - {page.cursorMovement.commands.g_}
            </li>
            <li>
              <kbd>gg</kbd> - {page.cursorMovement.commands.gg}
            </li>
            <li>
              <kbd>G</kbd> - {page.cursorMovement.commands.G}
            </li>
            <li>
              <kbd>5G</kbd> - {page.cursorMovement.commands.fiveG}
            </li>
            <li>
              <kbd>fx</kbd> - {page.cursorMovement.commands.fx}
            </li>
            <li>
              <kbd>tx</kbd> - {page.cursorMovement.commands.tx}
            </li>
            <li>
              <kbd>Fx</kbd> - {page.cursorMovement.commands.Fx}
            </li>
            <li>
              <kbd>Tx</kbd> - {page.cursorMovement.commands.Tx}
            </li>
            <li>
              <kbd>;</kbd> - {page.cursorMovement.commands.semicolon}
            </li>
            <li>
              <kbd>,</kbd> - {page.cursorMovement.commands.comma}
            </li>
            <li>
              <kbd>}</kbd> - {page.cursorMovement.commands.closeCurlyBrace}
            </li>
            <li>
              <kbd>{`{`}</kbd> - {page.cursorMovement.commands.openCurlyBrace}
            </li>
            <li>
              <kbd>zz</kbd> - {page.cursorMovement.commands.centerCursor}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>e</kbd> - {page.cursorMovement.commands.CtrlPluse}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>y</kbd> - {page.cursorMovement.commands.CtrlPlusy}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>b</kbd> - {page.cursorMovement.commands.CtrlPlusb}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>f</kbd> - {page.cursorMovement.commands.CtrlPlusf}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>d</kbd> - {page.cursorMovement.commands.CtrlPlusd}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>u</kbd> - {page.cursorMovement.commands.CtrlPlusu}
            </li>
          </ul>
          <div className="well">
            <strong>Tip</strong> <SetHtml>{page.cursorMovement.tip}</SetHtml>
          </div>
          <h2>{page.insertMode.title}</h2>
          <ul>
            <li>
              <kbd>i</kbd> - {page.insertMode.commands.i}
            </li>
            <li>
              <kbd>I</kbd> - {page.insertMode.commands.I}
            </li>
            <li>
              <kbd>a</kbd> - {page.insertMode.commands.a}
            </li>
            <li>
              <kbd>A</kbd> - {page.insertMode.commands.A}
            </li>
            <li>
              <kbd>o</kbd> - {page.insertMode.commands.o}
            </li>
            <li>
              <kbd>O</kbd> - {page.insertMode.commands.O}
            </li>
            <li>
              <kbd>ea</kbd> - {page.insertMode.commands.ea}
            </li>
            <li>
              <kbd>Esc</kbd> - {page.insertMode.commands.Esc}
            </li>
          </ul>
        </div>
        <div className="grid-lg-1-3">
          <h2>{page.editing.title}</h2>
          <ul>
            <li>
              <kbd>r</kbd> - {page.editing.commands.r}
            </li>
            <li>
              <kbd>J</kbd> - {page.editing.commands.J}
            </li>
            <li>
              <kbd>gJ</kbd> - {page.editing.commands.gJ}
            </li>
            <li>
              <kbd>gwip</kbd> - {page.editing.commands.gwip}
            </li>
            <li>
              <kbd>cc</kbd> - {page.editing.commands.cc}
            </li>
            <li>
              <kbd>C</kbd> - {page.editing.commands.C}
            </li>
            <li>
              <kbd>c$</kbd> - {page.editing.commands.cDollar}
            </li>
            <li>
              <kbd>ciw</kbd> - {page.editing.commands.ciw}
            </li>
            <li>
              <kbd>cw</kbd> - {page.editing.commands.cw}
            </li>
            <li>
              <kbd>s</kbd> - {page.editing.commands.s}
            </li>
            <li>
              <kbd>S</kbd> - {page.editing.commands.S}
            </li>
            <li>
              <kbd>xp</kbd> - {page.editing.commands.xp}
            </li>
            <li>
              <kbd>u</kbd> - {page.editing.commands.u}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>r</kbd> - {page.editing.commands.CtrlPlusr}
            </li>
            <li>
              <kbd>.</kbd> - {page.editing.commands.dot}
            </li>
          </ul>
          <h2>{page.markingText.title}</h2>
          <ul>
            <li>
              <kbd>v</kbd> - {page.markingText.commands.v}
            </li>
            <li>
              <kbd>V</kbd> - {page.markingText.commands.V}
            </li>
            <li>
              <kbd>o</kbd> - {page.markingText.commands.o}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>v</kbd> - {page.markingText.commands.CtrlPlusv}
            </li>
            <li>
              <kbd>O</kbd> - {page.markingText.commands.O}
            </li>
            <li>
              <kbd>aw</kbd> - {page.markingText.commands.aw}
            </li>
            <li>
              <kbd>ab</kbd> - {page.markingText.commands.ab}
            </li>
            <li>
              <kbd>aB</kbd> - {page.markingText.commands.aB}
            </li>
            <li>
              <kbd>ib</kbd> - {page.markingText.commands.ib}
            </li>
            <li>
              <kbd>iB</kbd> - {page.markingText.commands.iB}
            </li>
            <li>
              <kbd>Esc</kbd> - {page.markingText.commands.Esc}
            </li>
          </ul>
          <h2>{page.visualCommands.title}</h2>
          <ul>
            <li>
              <kbd>&#62;</kbd> - {page.visualCommands.commands.greaterThan}
            </li>
            <li>
              <kbd>&#60;</kbd> - {page.visualCommands.commands.lessThan}
            </li>
            <li>
              <kbd>y</kbd> - {page.visualCommands.commands.y}
            </li>
            <li>
              <kbd>d</kbd> - {page.visualCommands.commands.d}
            </li>
            <li>
              <kbd>~</kbd> - {page.visualCommands.commands.tilde}
            </li>
          </ul>
          <h2>{page.registers.title}</h2>
          <ul>
            <li>
              <kbd>:reg</kbd> - {page.registers.commands.show}
            </li>
            <li>
              <kbd>"xy</kbd> - {page.registers.commands.yankIntoRegisterX}
            </li>
            <li>
              <kbd>"xp</kbd> - {page.registers.commands.pasteRegisterX}
            </li>
          </ul>
          <div className="well">
            <strong>Tip</strong> {page.registers.tip1}
          </div>
          <div className="well">
            <strong>Tip</strong> {page.registers.tip2}
          </div>
          <h2>{page.marks.title}</h2>
          <ul>
            <li>
              <kbd>:marks</kbd> - {page.marks.commands.list}
            </li>
            <li>
              <kbd>ma</kbd> - {page.marks.commands.currentPositionA}
            </li>
            <li>
              <kbd>`a</kbd> - {page.marks.commands.jumpPositionA}
            </li>
            <li>
              <kbd>y`a</kbd> - {page.marks.commands.yankToMarkA}
            </li>
          </ul>
          <h2>{page.macros.title}</h2>
          <ul>
            <li>
              <kbd>qa</kbd> - {page.macros.commands.recordA}
            </li>
            <li>
              <kbd>q</kbd> - {page.macros.commands.stopRecording}
            </li>
            <li>
              <kbd>@a</kbd> - {page.macros.commands.runA}
            </li>
            <li>
              <kbd>{`@@`}</kbd> - {page.macros.commands.rerun}
            </li>
          </ul>
        </div>
        <div className="grid-lg-1-3">
          <h2>{page.cutAndPaste.title}</h2>
          <ul>
            <li>
              <kbd>yy</kbd> - {page.cutAndPaste.commands.yy}
            </li>
            <li>
              <kbd>2yy</kbd> - {page.cutAndPaste.commands.twoyy}
            </li>
            <li>
              <kbd>yw</kbd> - {page.cutAndPaste.commands.yw}
            </li>
            <li>
              <kbd>y$</kbd> - {page.cutAndPaste.commands.yDollar}
            </li>
            <li>
              <kbd>p</kbd> - {page.cutAndPaste.commands.p}
            </li>
            <li>
              <kbd>P</kbd> - {page.cutAndPaste.commands.P}
            </li>
            <li>
              <kbd>dd</kbd> - {page.cutAndPaste.commands.dd}
            </li>
            <li>
              <kbd>2dd</kbd> - {page.cutAndPaste.commands.twodd}
            </li>
            <li>
              <kbd>dw</kbd> - {page.cutAndPaste.commands.dw}
            </li>
            <li>
              <kbd>D</kbd> - {page.cutAndPaste.commands.D}
            </li>
            <li>
              <kbd>d$</kbd> - {page.cutAndPaste.commands.dDollar}
            </li>
            <li>
              <kbd>x</kbd> - {page.cutAndPaste.commands.x}
            </li>
          </ul>
          <h2>{page.exiting.title}</h2>
          <ul>
            <li>
              <kbd>:w</kbd> - {page.exiting.commands.colonw}
            </li>
            <li>
              <kbd>:w !sudo tee %</kbd> - {page.exiting.commands.colonwsudo}
            </li>
            <li>
              <kbd>:wq</kbd> or <kbd>:x</kbd> or <kbd>ZZ</kbd> - {page.exiting.commands.colonwq}
            </li>
            <li>
              <kbd>:q</kbd> - {page.exiting.commands.colonq}
            </li>
            <li>
              <kbd>:q!</kbd> or <kbd>ZQ</kbd> - {page.exiting.commands.colonqbang}
            </li>
            <li>
              <kbd>:wqa</kbd> - {page.exiting.commands.colonwqa}
            </li>
          </ul>
          <h2>{page.searchAndReplace.title}</h2>
          <ul>
            <li>
              <kbd>/pattern</kbd> - {page.searchAndReplace.commands.forwardSlashPattern}
            </li>
            <li>
              <kbd>?pattern</kbd> - {page.searchAndReplace.commands.questionMarkPattern}
            </li>
            <li>
              <kbd>\vpattern</kbd> - {page.searchAndReplace.commands.backslashVpattern}
            </li>
            <li>
              <kbd>n</kbd> - {page.searchAndReplace.commands.n}
            </li>
            <li>
              <kbd>N</kbd> - {page.searchAndReplace.commands.N}
            </li>
            <li>
              <kbd>:%s/old/new/g</kbd> -{' '}
              {
                page.searchAndReplace.commands
                  .colonPercentForwardSlashOldForwardSlashNewForwardSlashg
              }
            </li>
            <li>
              <kbd>:%s/old/new/gc</kbd> -{' '}
              {
                page.searchAndReplace.commands
                  .colonPercentForwardSlashOldForwardSlashNewForwardSlashgc
              }
            </li>
            <li>
              <kbd>:noh</kbd> - {page.searchAndReplace.commands.colonnoh}
            </li>
          </ul>
          <h2>{page.searchMultipleFiles.title}</h2>
          <ul>
            <li>
              <kbd>:vimgrep /pattern/ {`{file}`}</kbd> -{' '}
              {page.searchMultipleFiles.commands.colonvimgrep}
            </li>
          </ul>
          <div className="well">
            e.g.
            <kbd>:vimgrep /foo/ **/*</kbd>
          </div>
          <ul>
            <li>
              <kbd>:cn</kbd> - {page.searchMultipleFiles.commands.coloncn}
            </li>
            <li>
              <kbd>:cp</kbd> - {page.searchMultipleFiles.commands.coloncp}
            </li>
            <li>
              <kbd>:copen</kbd> - {page.searchMultipleFiles.commands.coloncopen}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-block">
        <div className="grid-lg-1-3">
          <h2>{page.workingWithMultipleFiles.title}</h2>
          <ul>
            <li>
              <kbd>:e {page.words.file}</kbd> - {page.workingWithMultipleFiles.commands.colone}
            </li>
            <li>
              <kbd>:bnext</kbd> or <kbd>:bn</kbd> -{' '}
              {page.workingWithMultipleFiles.commands.colonbnext}
            </li>
            <li>
              <kbd>:bprev</kbd> or <kbd>:bp</kbd> -{' '}
              {page.workingWithMultipleFiles.commands.colonbprev}
            </li>
            <li>
              <kbd>:bd</kbd> - {page.workingWithMultipleFiles.commands.colonbd}
            </li>
            <li>
              <kbd>:ls</kbd> - {page.workingWithMultipleFiles.commands.colonls}
            </li>
            <li>
              <kbd>:sp {page.words.file}</kbd> - {page.workingWithMultipleFiles.commands.colonsp}
            </li>
            <li>
              <kbd>:vsp {page.words.file}</kbd> - {page.workingWithMultipleFiles.commands.colonvsp}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>ws</kbd> - {page.workingWithMultipleFiles.commands.ctrlPlusws}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>ww</kbd> - {page.workingWithMultipleFiles.commands.ctrlPlusww}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wq</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswq}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wv</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswv}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wh</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswh}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wl</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswl}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wj</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswj}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wk</kbd> - {page.workingWithMultipleFiles.commands.ctrlPluswk}
            </li>
          </ul>
        </div>
        <div className="grid-lg-1-3">
          <h2>{page.tabs.title}</h2>
          <ul>
            <li>
              <kbd>:tabnew</kbd> or <kbd>:tabnew {page.words.file}</kbd> -{' '}
              {page.tabs.commands.colonTabNew}
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>wT</kbd> - {page.tabs.commands.ctrlPluswT}
            </li>
            <li>
              <kbd>gt</kbd> or <kbd>:tabnext</kbd> or <kbd>:tabn</kbd> - {page.tabs.commands.gt}
            </li>
            <li>
              <kbd>gT</kbd> or <kbd>:tabprev</kbd> or <kbd>:tabp</kbd> - {page.tabs.commands.gT}
            </li>
            <li>
              <kbd>#gt</kbd> - {page.tabs.commands.hashgt}
            </li>
            <li>
              <kbd>:tabmove #</kbd> - {page.tabs.commands.colontabmove}
            </li>
            <li>
              <kbd>:tabclose</kbd> or <kbd>:tabc</kbd> - {page.tabs.commands.colontabc}
            </li>
            <li>
              <kbd>:tabonly</kbd> or <kbd>:tabo</kbd> - {page.tabs.commands.colontabo}
            </li>
            <li>
              <kbd>:tabdo</kbd> command - <SetHtml>{page.tabs.commands.colontabdo}</SetHtml>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

function SetHtml(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.children }} />;
}
