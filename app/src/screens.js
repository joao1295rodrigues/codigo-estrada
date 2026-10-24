import { useMemo } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { percent } from './logic';
import { AdBanner } from './ads';
import { SIGN_IMAGES } from './signImages';

const makeStyles = (c) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: c.bg },
    header: { backgroundColor: c.brand, paddingHorizontal: 16, paddingBottom: 12 },
    brand: { color: c.brandInk, fontWeight: '700', fontSize: 17 },
    content: { padding: 16, width: '100%', maxWidth: 640, alignSelf: 'center' },
    h1: { color: c.text, fontSize: 24, fontWeight: '700', marginTop: 8, marginBottom: 4 },
    h2: { color: c.text, fontSize: 17, fontWeight: '700', marginTop: 24, marginBottom: 8 },
    lead: { color: c.muted, fontSize: 15, marginBottom: 16 },
    card: { backgroundColor: c.card, borderColor: c.line, borderWidth: 1, borderRadius: 14, padding: 16, marginVertical: 12 },
    stats: { flexDirection: 'row' },
    stat: { flex: 1, alignItems: 'center' },
    statNum: { color: c.text, fontSize: 22, fontWeight: '700' },
    statLabel: { color: c.muted, fontSize: 12 },
    btn: { backgroundColor: c.card, borderColor: c.line, borderWidth: 1, borderRadius: 12, paddingVertical: 14, paddingHorizontal: 16, marginVertical: 6 },
    btnPrimary: { backgroundColor: c.brand, borderColor: c.brand },
    btnText: { color: c.text, fontSize: 16 },
    btnTextPrimary: { color: c.brandInk, fontWeight: '600', textAlign: 'center' },
    disabled: { opacity: 0.5 },
    chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    chip: { backgroundColor: c.card, borderColor: c.line, borderWidth: 1, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 12 },
    chipText: { color: c.text, fontSize: 14 },
    adBar: { alignItems: 'center', backgroundColor: c.bg },
    adLink: { color: c.muted, fontSize: 12, textDecorationLine: 'underline' },
    foot: { color: c.muted, fontSize: 12, marginTop: 28, lineHeight: 18 },
    meta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
    metaText: { color: c.muted, fontSize: 13, flexShrink: 1 },
    tag: { backgroundColor: c.line, borderRadius: 99, paddingVertical: 2, paddingHorizontal: 10 },
    tagText: { color: c.muted, fontSize: 12 },
    progress: { height: 6, backgroundColor: c.line, borderRadius: 99, overflow: 'hidden', marginTop: 6, marginBottom: 12 },
    progressBar: { height: 6, backgroundColor: c.brand },
    sign: { width: 180, height: 180, alignSelf: 'center', marginTop: 8, marginBottom: 4 },
    question: { color: c.text, fontSize: 18, fontWeight: '600', marginTop: 8, marginBottom: 12, lineHeight: 25 },
    option: { backgroundColor: c.card, borderColor: c.line, borderWidth: 1, borderRadius: 12, paddingVertical: 14, paddingHorizontal: 16, marginVertical: 6 },
    optionOk: { backgroundColor: c.okBg, borderColor: c.ok },
    optionBad: { backgroundColor: c.badBg, borderColor: c.bad },
    optionPicked: { borderColor: c.brand, borderWidth: 2 },
    optionText: { color: c.text, fontSize: 16 },
    expl: { backgroundColor: c.card, borderLeftColor: c.brand, borderLeftWidth: 4, borderRadius: 10, padding: 12, marginVertical: 12 },
    explText: { color: c.text, fontSize: 15, lineHeight: 22 },
    score: { fontSize: 40, fontWeight: '800', color: c.text, marginTop: 4 },
    pass: { color: c.ok },
    fail: { color: c.bad },
    verdict: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
    err: { borderTopColor: c.line, borderTopWidth: 1, paddingVertical: 12 },
    errFirst: { borderTopWidth: 0 },
    errSign: { width: 72, height: 72, marginBottom: 6 },
    errQ: { color: c.text, fontWeight: '700', marginBottom: 4 },
    errLine: { color: c.text, fontSize: 14, marginTop: 2 },
    errExpl: { color: c.muted, fontSize: 14, marginTop: 4 },
  });

function useStyles(colors) {
  return useMemo(() => makeStyles(colors), [colors]);
}

function Button({ s, label, onPress, primary, disabled }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={[s.btn, primary && s.btnPrimary, disabled && s.disabled]}
    >
      <Text style={[s.btnText, primary && s.btnTextPrimary]}>{label}</Text>
    </Pressable>
  );
}

// Rodapé fixo em baixo no ecrã: "Preferências de anúncios" por cima e a faixa de anúncio por baixo.
function AdFooter({ s, adsReady, onAdPrivacy }) {
  if (!adsReady) return null;
  return (
    <View style={s.adBar}>
      {onAdPrivacy ? (
        <Pressable accessibilityRole="button" onPress={onAdPrivacy} style={{ paddingVertical: 6, paddingHorizontal: 12 }}>
          <Text style={s.adLink}>Preferências de anúncios</Text>
        </Pressable>
      ) : null}
      <AdBanner ready={adsReady} />
    </View>
  );
}

function Shell({ colors, children, adsReady, onAdPrivacy }) {
  const s = useStyles(colors);
  const insets = useSafeAreaInsets();
  return (
    <View style={s.root}>
      <View style={[s.header, { paddingTop: insets.top + 10 }]}>
        <Text style={s.brand}>Código da Estrada</Text>
      </View>
      <ScrollView contentContainerStyle={[s.content, { paddingBottom: 24 }]} keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
        {children}
      </ScrollView>
      <View style={{ paddingBottom: insets.bottom, backgroundColor: colors.bg }}>
        <AdFooter s={s} adsReady={adsReady} onAdPrivacy={onAdPrivacy} />
      </View>
    </View>
  );
}

export function Home({ colors, store, total, categories, wrongCount, examSize, onStart, adsReady, onAdPrivacy }) {
  const s = useStyles(colors);
  return (
    <Shell colors={colors} adsReady={adsReady} onAdPrivacy={onAdPrivacy}>
      <Text style={s.h1}>Treina para o exame de código</Text>
      <Text style={s.lead}>{total} perguntas com explicação. Grátis, sem registo.</Text>

      <View style={[s.card, s.stats]}>
        <View style={s.stat}><Text style={s.statNum}>{store.answered}</Text><Text style={s.statLabel}>respondidas</Text></View>
        <View style={s.stat}><Text style={s.statNum}>{percent(store)}%</Text><Text style={s.statLabel}>certas</Text></View>
        <View style={s.stat}><Text style={s.statNum}>{store.sessions}</Text><Text style={s.statLabel}>sessões</Text></View>
      </View>

      <Button s={s} primary label={`Simulacro (${Math.min(examSize, total)} perguntas)`} onPress={() => onStart({ type: 'exam' })} />
      <Button s={s} label="Treino geral com explicação" onPress={() => onStart({ type: 'all' })} />
      <Button s={s} label={`Rever os meus erros (${wrongCount})`} disabled={wrongCount === 0} onPress={() => onStart({ type: 'wrong' })} />

      <Text style={s.h2}>Treino por categoria</Text>
      <View style={s.chips}>
        {categories.map((cat) => (
          <Pressable key={cat} accessibilityRole="button" style={s.chip} onPress={() => onStart({ type: 'cat', cat })}>
            <Text style={s.chipText}>{cat}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={s.foot}>
        Conteúdo informativo e de treino. Não substitui o manual oficial nem a legislação em vigor: confirma sempre no IMT (imt-ip.pt).
        {'\n'}Sem registo. A app mostra anúncios (Google AdMob). O teu progresso fica guardado apenas neste dispositivo.
      </Text>
    </Shell>
  );
}

export function Quiz({ colors, session, onAnswer, onNext, onExit }) {
  const s = useStyles(colors);
  const item = session.items[session.i];
  const total = session.items.length;
  const exam = session.mode === 'exam';
  const answered = item.choice !== null;
  const feedback = answered && !exam;
  return (
    <Shell colors={colors}>
      <View style={s.meta}>
        <Text style={s.metaText} numberOfLines={1}>{session.label} · {session.i + 1}/{total}</Text>
        <View style={s.tag}><Text style={s.tagText}>{item.q.c}</Text></View>
      </View>
      <View style={s.progress}><View style={[s.progressBar, { width: `${(session.i / total) * 100}%` }]} /></View>

      {item.q.img && SIGN_IMAGES[item.q.img] ? (
        <Image source={SIGN_IMAGES[item.q.img]} style={s.sign} resizeMode="contain" accessibilityLabel="Imagem do sinal de trânsito" />
      ) : null}
      <Text style={s.question}>{item.q.q}</Text>

      {item.options.map((o, idx) => {
        const style = [s.option];
        if (feedback && o.ok) style.push(s.optionOk);
        else if (feedback && idx === item.choice) style.push(s.optionBad);
        else if (exam && idx === item.choice) style.push(s.optionPicked);
        return (
          <Pressable key={idx} accessibilityRole="button" disabled={answered} onPress={() => onAnswer(idx)} style={style}>
            <Text style={s.optionText}>{o.text}</Text>
          </Pressable>
        );
      })}

      {feedback ? (
        <View style={s.expl}>
          <Text style={s.explText}><Text style={{ fontWeight: '700' }}>{item.options[item.choice].ok ? 'Certo! ' : 'Errado. '}</Text>{item.q.e}</Text>
        </View>
      ) : null}

      {answered ? <Button s={s} primary label={session.i + 1 === total ? 'Ver resultado' : 'Seguinte'} onPress={onNext} /> : null}
      <Button s={s} label="Sair" onPress={onExit} />
    </Shell>
  );
}

export function Result({ colors, session, result, passRatio, onAgain, onHome, adsReady, onAdPrivacy }) {
  const s = useStyles(colors);
  const exam = session.mode === 'exam';
  const { total, right, wrongItems, passed } = result;
  return (
    <Shell colors={colors} adsReady={adsReady} onAdPrivacy={onAdPrivacy}>
      <Text style={s.metaText}>{session.label}</Text>
      <Text style={[s.score, exam && (passed ? s.pass : s.fail)]}>{right}/{total}</Text>
      {exam ? (
        <Text style={[s.verdict, passed ? s.pass : s.fail]}>
          {passed ? 'Aprovado no simulacro' : 'Reprovado no simulacro'}
          <Text style={{ color: colors.muted, fontWeight: '400' }}> (critério deste simulador: {Math.round(passRatio * 100)}% certas)</Text>
        </Text>
      ) : null}

      {wrongItems.length ? (
        <>
          <Text style={s.h2}>Para rever</Text>
          <View style={s.card}>
            {wrongItems.map((it, n) => (
              <View key={it.q.id} style={[s.err, n === 0 && s.errFirst]}>
                {it.q.img && SIGN_IMAGES[it.q.img] ? <Image source={SIGN_IMAGES[it.q.img]} style={s.errSign} resizeMode="contain" /> : null}
                <Text style={s.errQ}>{it.q.q}</Text>
                <Text style={s.errLine}>A tua resposta: {it.options[it.choice]?.text}</Text>
                <Text style={[s.errLine, s.pass]}>Certa: {it.options.find((o) => o.ok).text}</Text>
                <Text style={s.errExpl}>{it.q.e}</Text>
              </View>
            ))}
          </View>
        </>
      ) : (
        <Text style={s.lead}>Sem erros. Excelente!</Text>
      )}

      <Button s={s} primary label="Repetir" onPress={onAgain} />
      <Button s={s} label="Início" onPress={onHome} />
    </Shell>
  );
}
