import {
  OutlinedInput,
  InputAdornment,
  Box,
  Slider,
  Typography,
} from "@mui/material";
import { formatPercent, safeValue } from "../../helpers/helpers";
import type { CalculatorValues } from "../../helpers/mortgageCalculation";

interface Props {
  title: string;
  titleWithValue?: boolean;
  adornment?: string;
  updateValue: (key: keyof CalculatorValues) => (value: number) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  showSlider?: boolean;
  valueKey: keyof CalculatorValues;
  readOnly?: boolean;
  subTitle?: string;
  chip?: string;
}

function InputItem({
  title,
  adornment = "",
  chip = "",
  updateValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  showSlider = false,
  subTitle = "",
  valueKey,
  readOnly,
}: Props) {
  const handleChange =
    (key: keyof CalculatorValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const cleaned = e.target.value.replace(/\s/g, "");
      const parsed = parseFloat(cleaned);

      if (!isNaN(parsed)) {
        updateValue(key)(parsed);
      } else if (cleaned === "") {
        updateValue(key)(0);
      }
    };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ mb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
            {chip && `: ${chip}`}
          </Typography>
        </Box>
        {subTitle && (
          <Typography variant="caption" color="text.secondary" display="block">
            {subTitle}
          </Typography>
        )}
      </Box>
      <OutlinedInput
        sx={{
          borderRadius: 2,
          width: "100%",
          backgroundColor: readOnly ? "action.hover" : "background.paper",
        }}
        size="medium"
        id={valueKey}
        value={formatPercent(safeValue(value))}
        onChange={handleChange(valueKey)}
        readOnly={readOnly}
        endAdornment={
          adornment && (
            <InputAdornment position="end">{adornment}</InputAdornment>
          )
        }
      />
      {showSlider && (
        <Slider
          value={value}
          onChange={(_, val) => updateValue(valueKey)(val as number)}
          min={min}
          max={max}
          step={step}
          sx={{ mt: 1 }}
        />
      )}
    </Box>
  );
}

export default InputItem;
