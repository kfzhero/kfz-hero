import React, { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(1)
  const [vehicle, setVehicle] = useState({
    hersteller: '',
    modell: '',
    motorisierung: '',
    kba: ''
  })
  const [leistung, setLeistung] = useState('')
  const [plz, setPlz] = useState('')

  const werkstaetten = [
    {
      name: 'Autohaus Berlin GmbH',
      adresse: 'Musterstraße 1, 10115 Berlin',
      leistungen: ['Bremsbeläge wechseln', 'Ölwechsel'],
      preis: 'ab 129 €',
      zeiten: ['09:00', '13:00', '16:30']
    },
    {
      name: 'KFZ Meier & Söhne',
      adresse: 'Beispielweg 2, 10243 Berlin',
      leistungen: ['Zahnriemenwechsel', 'Batterietausch'],
      preis: 'ab 199 €',
      zeiten: ['08:30', '12:00', '15:00']
    }
  ]

  if (step === 1) {
    return (
      <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
        <h1>KFZ-Hero – Fahrzeugauswahl</h1>
        <input placeholder="Hersteller" value={vehicle.hersteller} onChange={e => setVehicle({ ...vehicle, hersteller: e.target.value })} />
        <input placeholder="Modell" value={vehicle.modell} onChange={e => setVehicle({ ...vehicle, modell: e.target.value })} />
        <input placeholder="Motorisierung" value={vehicle.motorisierung} onChange={e => setVehicle({ ...vehicle, motorisierung: e.target.value })} />
        <input placeholder="KBA (optional)" value={vehicle.kba} onChange={e => setVehicle({ ...vehicle, kba: e.target.value })} />
        <button onClick={() => setStep(2)}>Weiter zur Leistungsauswahl</button>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
        <h1>Welche Reparaturleistung brauchst du?</h1>
        <input placeholder="z.B. Bremsbeläge wechseln" value={leistung} onChange={e => setLeistung(e.target.value)} />
        <input placeholder="Postleitzahl" value={plz} onChange={e => setPlz(e.target.value)} />
        <button onClick={() => setStep(3)}>Werkstätten anzeigen</button>
      </div>
    )
  }

  if (step === 3) {
    const gefiltert = werkstaetten.filter(w =>
      w.leistungen.includes(leistung)
    )

    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
        <h1>Werkstätten in deiner Nähe</h1>
        {gefiltert.length === 0 && <p>Keine passenden Werkstätten gefunden.</p>}
        {gefiltert.map((w, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <h2>{w.name}</h2>
            <p>{w.adresse}</p>
            <p>Preis: {w.preis}</p>
            <p>Verfügbare Zeiten: {w.zeiten.join(', ')}</p>
            <button>Buchen</button>
          </div>
        ))}
      </div>
    )
  }

  return null
}
