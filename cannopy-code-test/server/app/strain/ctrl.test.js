
it('gets strains', (done) => {
    ctrl.getStrains(req).then(data => {
        done()
    })
})

it('gets strain by id', (done) => {    
    const req =  {id: '..id..'}
    ctrl.getStrain(req).then(data => {      
      done()
    })
  })