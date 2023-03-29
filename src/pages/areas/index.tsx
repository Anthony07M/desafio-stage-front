import { useEffect, useState } from "react";
import { RegisterArea } from "../../components/forms/registerArea";
import { Area } from "../../components/area";
import { SideSheet } from "../../components/sidesheets";
import { Container } from "./styles"
import { requestsArea } from "../../services/requests";

export const AreaPage = () => {

    const [areas, setAreas] = useState([]);
    const [open, setOpen] = useState(false)
    const [areaId, setAreaId] = useState<string>('');

    useEffect(() => {
        (async () => {
            const response = await requestsArea.getAreas();
            setAreas(response)
        })()
    }, [open])

    return (
        <Container>
            {areas?.map((area: any) => {
                return (
                    <Area
                        key={area.id}
                        name={area.name}
                        description={area.description}
                        areaId={area.areaId}
                        _count={area._count}
                        onClick={() => {setOpen(true), setAreaId(area.id)}}
                    />
                )
            })}
            <SideSheet
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Área"
                children={<RegisterArea areaId={areaId} onClose={() => setOpen(false)} />}
            />
            <div className="content-button">
                <button onClick={() => setOpen(true)} >CADASTRAR ÁREA</button>
            </div>
        </Container>
    )
}